import { db } from "@/lib/db";

export default async function ReviewDisplay({ gameID }) {
  const review = await db.query("SELECT * FROM reviews WHERE game_id = $1", [
    gameID,
  ]);
  const reviews = review.rows;
  console.log(reviews.rows);


  return (
    <div>
      <p>Reviews: </p>

      {reviews.map(function (review) {
        // console.log("This Individual Entry Is the reviews", review);

        return (
          
          <div className="reviewsOutput">
            <p key={review.id}>
              ID - {review.game_id} - {review.username} - {review.review}{" "}
              <button className="submitBtn">Delete</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
