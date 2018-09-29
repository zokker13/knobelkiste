defmodule RecursionFun do
  def list_len(list) do
    do_list_len(0, list)
  end

  defp do_list_len(current_length, []) do
    current_length
  end

  defp do_list_len(current_length, [_ | tail]) do
    do_list_len(current_length + 1, tail)
  end

  # not tail recursive?
  def range(start_value, end_value) do
    do_range(start_value, end_value, [])
  end

  defp do_range(start_value, end_value, result) when start_value > end_value do
    result
  end

  defp do_range(start_value, end_value, result) do
    do_range(start_value, end_value - 1, [end_value | result])
  end

  def positive(list) do
    do_positive([], list)
    |> Enum.reverse
  end

  defp do_positive(new_list, []) do
    new_list
  end

  defp do_positive(new_list, [head|tail]) do
    if head > 0 do
      do_positive([head | new_list], tail)
    else
      do_positive(new_list, tail);
    end
  end
end
