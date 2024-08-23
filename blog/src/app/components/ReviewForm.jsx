import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "../page.module.css";

export default function ReviewForm() {
  async function handleAddReview(formData) {
    "use server";

    console.log("review action done");

    const username = formData.get("username");
    const review = formData.get("review");
    const game_id = formData.get("game_id");

    await db.query(
      `INSERT INTO reviews (username, review, game_id) VALUES ($1, $2, $3)`,
      [username, review, game_id]
    );

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="game">
      <h2 className="title">Add Review </h2>
      <form action={handleAddReview}>
        <div className="form">
          <input name="username" placeholder="username" />
          <input name="review" placeholder="Review" />
          <input name="game_id" placeholder="game_id" type="number" />
          <button className="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}
