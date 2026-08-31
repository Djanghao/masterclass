# Simple Erlang Solution (If Else + Recursion)

**Author:** anhvuk13
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/2120697/](https://leetcode.com/problems/integer-to-english-words/solutions/2120697/)

---

```erlang
-spec number_to_words(Num :: integer()) -> unicode:unicode_binary().
number_to_words(0) ->
    <<"Zero">>;
number_to_words(Num) ->
    Words1 = number_to_words(Num div 1000000000, Num rem 1000000000, 1000000000, <<>>),
    Words2 = string:replace(Words1, "  ", " ", all),
    string:trim(list_to_bitstring(Words2)).

number_to_words(Cur3Digits, 0, 1, Acc) ->
    <<Acc/binary, (read_3_digits(Cur3Digits))/binary>>;
number_to_words(Cur3Digits, Rest, Mul, Acc) ->
    Read3Digits = read_3_digits(Cur3Digits),
    Read0s = case Read3Digits == <<>> of
                 true ->
                     <<>>;
                 false ->
                     read_0s(Mul)
             end,
    NewMul = Mul div 1000,
    NewAcc = <<Acc/binary, Read3Digits/binary, Read0s/binary>>,
    NewCur3Digits = Rest div NewMul,
    NewRest = Rest rem NewMul,
    number_to_words(NewCur3Digits, NewRest, NewMul, NewAcc).

read_3_digits(N) when (N rem 100) div 10 == 1 ->
    <<(read_3rd_digit(N div 100))/binary, (read_1x(N rem 100))/binary>>;
read_3_digits(N) ->
    <<(read_3rd_digit(N div 100))/binary, (read_2nd_digit(N rem 100 div 10))/binary,(read_digit(N rem 10))/binary>>.

read_3rd_digit(0) ->
    <<>>;
read_3rd_digit(N) ->
    ReadDigit = read_digit(N),
    case ReadDigit == <<>> of
        true ->
            <<>>;
        false ->
            <<ReadDigit/binary, " Hundred ">>
    end.

read_digit(0) -> <<>>;
read_digit(1) -> <<" One ">>;
read_digit(2) -> <<" Two ">>;
read_digit(3) -> <<" Three ">>;
read_digit(4) -> <<" Four ">>;
read_digit(5) -> <<" Five ">>;
read_digit(6) -> <<" Six ">>;
read_digit(7) -> <<" Seven ">>;
read_digit(8) -> <<" Eight ">>;
read_digit(9) -> <<" Nine ">>.

read_2nd_digit(0) -> <<>>;
read_2nd_digit(2) -> <<" Twenty ">>;
read_2nd_digit(3) -> <<" Thirty ">>;
read_2nd_digit(4) -> <<" Forty ">>;
read_2nd_digit(5) -> <<" Fifty ">>;
read_2nd_digit(6) -> <<" Sixty ">>;
read_2nd_digit(7) -> <<" Seventy ">>;
read_2nd_digit(8) -> <<" Eighty ">>;
read_2nd_digit(9) -> <<" Ninety ">>.

read_1x(10) -> <<" Ten ">>;
read_1x(11) -> <<" Eleven ">>;
read_1x(12) -> <<" Twelve ">>;
read_1x(13) -> <<" Thirteen ">>;
read_1x(14) -> <<" Fourteen ">>;
read_1x(15) -> <<" Fifteen ">>;
read_1x(16) -> <<" Sixteen ">>;
read_1x(17) -> <<" Seventeen ">>;
read_1x(18) -> <<" Eighteen ">>;
read_1x(19) -> <<" Nineteen ">>.

read_0s(1000000000) -> <<" Billion ">>;
read_0s(1000000) -> <<" Million ">>;
read_0s(1000) -> <<" Thousand ">>;
read_0s(1) -> <<>>.
```