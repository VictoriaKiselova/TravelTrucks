import { useSelector } from "react-redux";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import sprite from "../../Image/Icons.svg";
import css from "./Reviews.module.css";

export default function Reviews() {
  const details = useSelector(selectorDetails);

  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={i <= rating ? css.starFilled : css.starEmpty}>
          <use href={sprite + "#icon-star"} />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className={css.reviewsWrapper}>
      {details.reviews && details.reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {details.reviews.map((review, index) => (
            <li key={index} className={css.reviewItem}>
              <div className={css.aboutRewiew}>
                <div className={css.reviewFirstLetter}>
                  {review.reviewer_name[0]}
                </div>
                <div>
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <span className={css.reviewDate}>
                    {renderStars(review.reviewer_rating)}
                  </span>
                </div>
              </div>
              <p className={css.reviewContent}>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
