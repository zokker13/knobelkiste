defmodule ZeichenZaehlen do

  defp replace_space(letter) do
    replace_space = fn
      (" ") -> "_"
      (x) -> x
    end
    replace_space.(letter)
  end
  def zaehle_alles(text) do
    rtext = to_string(text)
    alpha = String.graphemes(rtext)
      |> Stream.map(&(replace_space(&1)))
      |> Enum.reduce(
        %{},
        fn x, acc ->
          Map.update(acc, x, 1, &(&1 + 1))
        end
      )
    alpha
  end

  def zaehle_alles_var2(text) do
    zaehle_alles(String.downcase(text))
  end
end
