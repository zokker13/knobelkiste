# ZeichenZählen kata

Stolen from https://ccd-school.de/coding-dojo/function-katas/zeichen-zaehlen/

## Description
Count all the letters you pass into your function.
Make sure you use the underscore `_` for space ` `!

### Variation 2
Consider to mix upper and lowercase letters.


Run with:
```bash
$ iex zeichen_zaehlen.ex
iex(1)> ZeichenZaehlen.zaehle_alles("Das darf nicht sein")
```

Output:
```Elixir
%{
  "D" => 1,
  "_" => 3,
  "a" => 2,
  "c" => 1,
  "d" => 1,
  "e" => 1,
  "f" => 1,
  "h" => 1,
  "i" => 2,
  "n" => 2,
  "r" => 1,
  "s" => 2,
  "t" => 1
}
```

Run with:
```bash
$ iex zeichen_zaehlen.ex
iex(1)> ZeichenZaehlen.zaehle_alles_var2("Das darf nicht sein")
```

Output:
```Elixir
%{
  "_" => 3,
  "a" => 2,
  "c" => 1,
  "d" => 2,
  "e" => 1,
  "f" => 1,
  "h" => 1,
  "i" => 2,
  "n" => 2,
  "r" => 1,
  "s" => 2,
  "t" => 1
}
```
