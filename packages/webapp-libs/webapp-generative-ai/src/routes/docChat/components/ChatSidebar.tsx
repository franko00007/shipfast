import { Link, ButtonVariant } from '@sb/webapp-core/components/buttons';
import { FileTextIcon } from "lucide-react"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { Dropzone } from '@sb/webapp-core/components/forms';


const ChatSidebar = ({ chats, chatId }) => {

    return (
        <div className="w-full h-screen p-4 text-gray-200">
            <Dropzone label="Upload new file" />
            <div className="flex flex-col gap-2 mt-8">
                {chats.map((chat: { id: Key | null | undefined; pdfName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                    <a key={chat.id} href="en/doc-chat" className="flex text-gray-600 px-2 py-0 mt-1">
                        <FileTextIcon className="mr-2" />
                        <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis font-bold">{chat.pdfName}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ChatSidebar