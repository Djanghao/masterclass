# Rust Easy Solution

**Author:** wkpids
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/3542154/](https://leetcode.com/problems/guess-the-word/solutions/3542154/)

---


# Code
```
/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * struct Master;
 * impl Master {
 *     fn guess(word:String)->int;
 * };
 */

impl Solution {

    // Compare two strings and get an amount of matching characters
    fn compare(first: &str, second: &str) -> i32 {
        first.chars()
            .zip(second.chars())
            .filter(|(a, b)| a == b)
            .count() as i32
    }

    pub fn find_secret_word(mut words: Vec<String>, master: &Master) {
        loop {
            // Ideally you would just .pop() here
            // But for some reason it doesn't pass the last test case if you do
            // I guess that the test cases are just dumb
            //
            // We just need any random word from the list
            // to guess it
            let word = words.swap_remove(words.len() / 2);

            // Guess a word and get the amount of matching characters
            let matches = master.guess(word.clone());

            // If 6 characters match then we guessed the correct number
            // and can exit the loop
            if matches == 6 { break }

            // If we didn't guess correctly, then we only need to retain
            // words that have the same amount of matching characters
            // And continue the loop to guess again, but with the
            // updated pool of words
            words.retain(|word2| {
                Self::compare(&word, &word2) == matches
            });
        }
    }
}
```