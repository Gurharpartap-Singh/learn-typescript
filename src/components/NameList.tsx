type NameListProps={
    name:{
        first:string,
        last:string
    }[]
};

export const NameList=(props:NameListProps)=>{
    return (
        <div>
            {props.name.map(namee=>{
                return (<div>{namee.first} {namee.last}</div>)
            })}
        </div>
    );
}