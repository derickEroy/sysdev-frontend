import Image from "next/image";
import { useEffect, useState } from "react";

export default function Collaborators() {
    const [collaborators, setCollaborators] = useState<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        avatar: string;
    }[]>([]);

    useEffect(() => {
        (async () => {
            const data = (
                await (
                    await fetch("https://reqres.in/api/users?page=2")
                ).json()
            ).data;

            setCollaborators(data);
        })();
    }, []);
    
    return (
        <ul className={`
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            w-full
            mt-8
            mx-auto
        `}>
            {collaborators?.map((user) => (
                <li
                    key={user.id}
                    className={`
                        border
                        border-neutral-800
                        rounded
                        p-4
                        w-full
                        flex
                        items-center
                        gap-4
                    `}
                >
                    <Image
                        src={user.avatar}
                        alt={`User ${user.id} Avatar`}
                        width={512}
                        height={512}
                        priority
                        className={`
                            collaborator-image-size
                            rounded-full
                            object-cover
                        `}
                    />
                    <div>
                        <h4 className={`
                            font-bold
                            text-sm
                        `}>
                            {user.first_name}
                            &nbsp;
                            {user.last_name}
                        </h4>
                        <p className={`
                            text-xs
                            text-neutral-500
                        `}>
                            {user.email}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}