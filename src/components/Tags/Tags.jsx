import style from "./Tags.module.css";

function Tags({ className, tag = [] }) {
  return (
    // <span key={tag} className={props.tag((style = { php, cardTag }))}>
    //   {tag}
    // </span>
    <ul className={`${style.tags} ${className}`}>
      {tags.map((tag) => (
        // <li style={{ backgroundColor: tagColors[tag] }} className={`${style.tag_item}`} key={tag}>{tag}</li>
        <li className={`${style.cardTag} ${style[tag]}`} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
