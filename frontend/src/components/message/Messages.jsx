import useGetMessages from "../../hooks/useGetMessage"
import Message from "./Message"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" })
    }, 200)
  }, [messages])
  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        !loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id}
            ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))
      }
      {loading && [...Array(3)].map((_, id) => <MessageSkeleton key={id} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages





// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages