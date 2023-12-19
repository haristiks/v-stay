import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useLoginModal from "./useLoginModal";

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    const favlist = list.filter((item) => item.listingId == listingId);
    return favlist.length > 0;
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();

      console.log(currentUser);

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () =>
            axios.put(
              `/api/users/favorites`,
              { listingId },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${currentUser?.accessToken}`,
                },
              }
            );
        } else {
          request = () =>
            axios.post(
              `/api/users/favorites`,
              { listingId },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${currentUser?.accessToken}`,
                },
              }
            );
        }

        const response = await request();

        router.refresh();
        toast.success(response.data.message);
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
