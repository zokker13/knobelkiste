# ToDictionary kata

Stolen from https://ccd-school.de/coding-dojo/function-katas/todictionary/

## Description
Take a string and dissect it's contents to a dictionary.

Run with:
```bash
$ iex to_dictionary.ex
iex(1)> ToDictionary.to_dictionary("a=1;b=2;c=3;a=4;;k=9;l=;o==o")
```

Output:
```Elixir
%{"a" => "4", "b" => "2", "c" => "3", "k" => "9", "l" => "", "o" => "=o"}
```
