'use client'

import axios from "axios";
import { useForm } from "react-hook-form";

export default async function Home() {

  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    await axios.post("/api/tour",{
      ...data
    })
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label>Name</label>
              <input {...register("name")} name='name' type='text' />
          </div>
          <div>
              <label>Price</label>
              <input {...register("price")} type="number" name='price' />
          </div>
          <div>
              <label>Difficulty</label>
              <select {...register("difficulty")} name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="difficult">Difficult</option>
              </select>
          </div>
          <button>Submit</button>
      </form>
  )
}
