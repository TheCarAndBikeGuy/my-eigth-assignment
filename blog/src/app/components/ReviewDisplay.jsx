import { db } from "@/lib/db";

export default async function ReviewDisplay({ gameID }) {
  const review = await db.query("SELECT * FROM reviews WHERE game_id = $1", [
    gameID,
  ]);
  const reviews = review.rows;
  console.log(reviews.rows);

  // async function HandleDelete() {
  //   try {
  //   const { data, error } = await db
  //   .from('reviews')
  //   .delete()
  //   .eq('id', reviews.id)

  //   if (error) throw error;
  //     window.location.reload();
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  return (
    <div>
      <p>Reviews: </p>

      {reviews.map(function (review) {
        // console.log("This Individual Entry Is the reviews", review);

        return (
          <div key={review.id} className="reviewsOutput">
            <div>
              ID - {review.game_id} - {review.username} - {review.review}{" "}
              <button className="submitBtn">Delete</button>
              {/* onClick={() => HandleDelete(reviews.id)} */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
