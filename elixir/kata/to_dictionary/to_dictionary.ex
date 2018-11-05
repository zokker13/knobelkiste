defmodule ToDictionary do

  def to_dictionary(text) do
    String.split(text, ";")
      |> Stream.filter(&(String.length(&1) > 0))
      |> Enum.reduce(
        %{},
        fn x, acc ->
          [key, value] = String.split(x, "=", parts: 2)
          if String.length(key) <= 0 do
            raise "Yo, Key not known. value: #{value}."
          end
          Map.put(acc, key, value)
        end
      )
  end
end
