import React from "react";
import { ReactComponent as Question } from "./question_answer.svg";
import { ReactComponent as Notify } from "./notifications.svg";
import { ReactComponent as Folder } from "./folder.svg";
import { ReactComponent as Groups } from "./groups.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Setting } from "./settings.svg";
import { ReactComponent as More } from "./more.svg";
import { ReactComponent as ArrowBack } from "./arrow_back.svg";


export const FolderIcon = () => {
    return <Folder />
}
export const QuestionIcon = () => {
    return <Question />
}
export const NotifyIcon = () => {
    return <Notify />
}
export const GroupsIcon = () => {
    return <Groups />
}
export const SearchIcon = () => {
    return <Search />
}
export const SettingIcon = () => {
    return <Setting />
}
export const MoreIcon = () => {
    return <More />
}
export const BackIcon = () => {
    return <ArrowBack />
}