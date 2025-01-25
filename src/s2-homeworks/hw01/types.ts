export type MessageType = {
    id: number,
    user: UserPropsType,
    message: MessagePropsType
}
export type MessagePropsType = {
    text: string,
    time: string
}

export type UserPropsType = {
    avatar: any,
    name: string
}