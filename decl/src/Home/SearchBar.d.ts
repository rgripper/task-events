import * as React from "react";
interface MappedStateProps {
    value: string;
}
interface MappedDispatchProps {
    onChange: (value: string) => void;
}
declare type Props = MappedStateProps & MappedDispatchProps;
declare class _SearchBar extends React.Component<Props> {
    memoizeDebounce: (fun: any) => any;
    render(): JSX.Element;
}
export declare const SearchBar: import("react-redux").ConnectedComponentClass<typeof _SearchBar, Pick<Props, never>>;
export {};
