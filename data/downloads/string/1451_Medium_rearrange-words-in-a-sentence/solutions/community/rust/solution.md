# sort_by implemented, overcomplicated solution using struct HAHAHAH | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4127278/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4127278/)

---

# Code
```
impl Solution {
    pub fn arrange_words(text: String) -> String {
        // use Struct
        #[derive(Debug)]
        struct WordFreqIdx {
            word: String,
            freq: u32,
            idx: usize
        }; // LOL u dont need to use struct, use vec or arr
        let mut test_struct = WordFreqIdx {
            word: String::from("TEST"),
            freq: 4,
            idx: 0
        };
        // println!("test_struct: {:?}", test_struct);
        test_struct.word.push_str(&String::from(" WHAT")[..]);
        // println!("addd--->test_struct: {:?}", test_struct);

        let mut wfis: Vec<WordFreqIdx> = vec![];

        let mut text_c: Vec<char> = text.chars().collect();
        // let mut words: Vec<String> = vec![];
        

        let mut idx: usize = 0;
        while idx < text_c.len() {
            // break;
            let mut word: String = String::new();
            if text_c[idx] != ' ' {
                while idx < text_c.len() && text_c[idx] != ' ' {
                    word.push(text_c[idx]);
                    idx += 1;
                }
                // println!("word_test: {:?},-- idx: {}", word, idx);
                let word_length: u32 = word.len() as u32;
                let wfi = WordFreqIdx {
                    word: word,
                    freq: word_length,
                    idx: idx-word_length as usize
                };       
                wfis.push(wfi);
            }
            idx += 1;
        }
        // println!("before::word_freq_idx: {:?}", wfis);
        wfis.sort_by(|a, b| {
            if a.freq != b.freq {a.freq.cmp(&b.freq)}
            else {a.idx.cmp(&b.idx)}
        });
        // println!("after::word_freq_idx: {:?}", wfis);
        let mut result: String = String::new();
        for i in 0..wfis.len() {
            if i == 0 {
                result.push_str(&wfis[i].word[..1].to_uppercase());
                result.push_str(&wfis[i].word[1..]);
            } else {
                result.push_str(&wfis[i].word[..].to_lowercase());
            }

            if i == (wfis.len()-1) {break}
            result.push(' ');
        }

        result
    }
}
```