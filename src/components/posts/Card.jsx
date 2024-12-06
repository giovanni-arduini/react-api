import Button from "../UI/button/button";
import style from "./Card.module.css";
import placeholder from "../../assets/undefined.png";
import Tags from "../Tags/Tags";

// function getClassByTag(tag) {
//   let className;
//   switch (tag) {
//     case "js":
//       return (className = style.js);
//     case "php":
//       return (className = style.php);
//     case "html":
//       return (className = style.html);
//     case "css":
//       return (className = style.css);

//     default:
//       className = "";
//       break;
//   }

// return className;
// }

export default function card(props) {
  // const tags = props.tags;

  const { id, title, description, category, image, tags } = props;

  return (
    <div className={style.card}>
      <img
        className={style.thumbnail}
        src={image ? image : placeholder}
        alt=""
      />

      <div className={style.body}>
        <h3 className={style.title}>{title}</h3>
        <div key={id}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={` ${style.cardTag} ${style[tag.split(" ").join("")]}`}
            >
              {/* `${getClassByTag(tag)} si poteva inserire tra le classi dopo la logica switch sopra*/}
              {tag}
            </span>
          ))}
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.description}>{category}</div>

        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
