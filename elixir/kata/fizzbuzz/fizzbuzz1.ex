defmodule Fizzbuzz do
  def fizzbuzz1() do
    Enum.map(1..100, fn(x) ->
      select_substring = fn
        (true, _, _) -> "~Fizz"
        (_, true, _) -> "~Buzz"
        (_, _, x) -> x
      end
      select_basic = fn
        (0, 0, _) -> "FizzBuzz"
        (0, _, _) -> "Fizz"
        (_, 0, _) -> "Buzz"
        (_, _, x) ->
          select_substring.(String.contains?(to_string(x), "3"), String.contains?(to_string(x), "5"), x)
      end
      select_basic.(rem(x, 3), rem(x, 5), x)
    end)
    |> Enum.each(&(IO.puts &1))
  end
end
