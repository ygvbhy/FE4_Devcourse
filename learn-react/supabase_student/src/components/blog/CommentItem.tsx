import { Trash2 } from "lucide-react";
import Avatar from "../ui/Avatar";
import { Comment } from "./CommentsSection";
import { format } from "date-fns";
import { useAuthStore } from "../../store/authStore";

export default function CommentItem({
  id,
  comment,
  profiles,
  created_at,
  handleCommentDelete,
}: Comment[number] & {
  handleCommentDelete: (id: number) => Promise<void>;
}) {
  const { session } = useAuthStore();
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex gap-4">
        <Avatar
          src={profiles?.avatar_url || ""}
          alt={profiles?.username || ""}
          size="sm"
        />
        <div className="flex-1">
          <div className="bg-[#161B22] rounded-lg p-4 mb-2">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium text-white">
                  {profiles?.username}
                </span>
                <span className="text-[#8b949e] text-xs ml-2">
                  {format(new Date(created_at), "yyyy.MM.dd HH:mm")}
                </span>
              </div>
            </div>
            <p className="text-[#c9d1d9]">{comment}</p>
          </div>
          {session?.user.id === profiles?.id && (
            <div className="flex gap-4 ml-1">
              <button
                className="flex items-center text-[#8b949e] hover:text-[#58a6ff] text-sm transition-colors"
                onClick={() => handleCommentDelete(id)}
              >
                <Trash2 size={14} className="mr-1" />
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
