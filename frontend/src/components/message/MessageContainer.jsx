import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"
import MessagesInput from "./MessagesInput"
import useConversation from "../../zustand/useConversation"
import { useEffect } from "react"

function MessageContainer() {

  const { selectedConversation, setSelectedConversation } = useConversation()


  useEffect(() => {
    // Cleanup  function (unmount)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {!selectedConversation ? <NoChatSelected />
          : (
            <>
              {/* Header */}
              <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text">To:</span> <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
              </div>
              <Messages />
              <MessagesInput />
            </>
          )
        }
      </>
    </div >
  )
}

export default MessageContainer


const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Sapphire smith ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};




// import Messages from "./Messages"
// import MessagesInput from "./MessagesInput"

// function MessageContainer() {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//       {/* Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span> <span className="text-gray-900 font-bold">John doe</span>
//         </div>
//         <Messages/>
//         <MessagesInput/>
//       </>
//     </div>
//   )
// }

// export default MessageContainer