# [Rust / Elixir] with backtracking

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199514/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5199514/)

---

For Rust, convert `words` and `letters` to frequency arrays.
For Elixir, convert to frequency `Map`s.
Also pre-process each word's value using `score`, then use backtracking.
# Code
```Rust []
impl Solution {
    pub fn max_score_words(words: Vec<String>, letters: Vec<char>, score: Vec<i32>) -> i32 {
        let mut count = [0; 26];
        for &ch in letters.iter() {
            count[(ch as u8 - b'a') as usize] += 1;
        }
        let mut freqs = vec![[0; 27]; words.len()];
        for (i, s) in words.iter().enumerate() {
            for b in s.bytes() {
                let j = (b - b'a') as usize;
                freqs[i][j] += 1;
                freqs[i][26] += score[j];
            }
        }
        Self::backtrack(0, &mut count, &freqs)
    }

    fn backtrack(i: usize, count: &mut [i32; 26], freqs: &Vec<[i32; 27]>) -> i32 {
        if i == freqs.len() {
            return 0;
        }
        let mut ans = Self::backtrack(i + 1, count, freqs);
        if (0..26).all(|j| count[j] >= freqs[i][j]) {
            let mut acc = 0;
            for j in 0..26 {
                count[j] -= freqs[i][j];
            }
            let ans2 = Self::backtrack(i + 1, count, freqs);
            ans = ans.max(freqs[i][26] + ans2);
            for j in 0..26 {
                count[j] += freqs[i][j];
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_score_words(words :: [String.t], letters :: [char], score :: [integer]) :: integer
  def max_score_words(words, letters, score) do
    score =
      Enum.zip(?a..?z, score)
      |> Map.new()

    list =
      Enum.map(words, fn s ->
        freq =
          String.to_charlist(s)
          |> Enum.frequencies()
        val =
          Enum.map(freq, fn {ch, x} ->
            x * Map.get(score, ch)
          end)
          |> Enum.sum()
        
        {freq, val}
      end)

    count = Enum.frequencies(letters)
    
    backtrack(list, count)
  end

  defp backtrack([{freq, val} | tail], count) do
    can_use =
      Enum.all?(freq, fn {ch, x} ->
        x <= Map.get(count, ch, 0)
      end)
      
    if can_use do
      count2 =
        Map.new(count, fn {ch, y} ->
          {ch, y - Map.get(freq, ch, 0)}
        end)

      val + backtrack(tail, count2)
    else
      0
    end
    |> max(backtrack(tail, count))
  end
  defp backtrack([], _), do: 0
end
```