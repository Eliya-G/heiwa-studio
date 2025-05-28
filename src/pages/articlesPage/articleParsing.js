export function ArticleParser(props){

    let text = props.text;
    const myArr = text.split("|");

    return (
        <>
            {myArr.map((item, index) => (
                <p key={index} className="article-para">{item}</p>
            ))} 
        </>
    );
}