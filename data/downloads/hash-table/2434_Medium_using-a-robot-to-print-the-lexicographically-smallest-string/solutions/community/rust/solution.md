# ✅ [Rust] 2 ms, fastest (100%) overoptimized solution + bonus (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2692045/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2692045/)

---

This [**solution**](https://leetcode.com/submissions/detail/820395021/) employs a variety of optimizations to improve performance. It demonstrated **2 ms runtime (100.00%)** and used **2.4 MB memory (83.33%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(N)**. Detailed comments are provided.

Please check the analogous solution in [**Python**](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/discuss/2687735/Python-463-ms-fastest-(100)-solution-using-stack-(with-detailed-comments)).

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn robot_with_string(s: String) -> String 
    {
        let mut paper: Vec<u8> = Vec::with_capacity(s.len());
        let mut stack: Vec<u8> = Vec::with_capacity(s.len());
        let mut bytes = s.as_bytes();
        
        // [1] determine the position of last occurence for each letter;
        //     for absent letters, the value is usize::MAX
        let mut last_pos: [usize;26] = [usize::MAX;26];
        let mut letters: u32 = 0b00000000_00000000_00000000_00000000;
        for (pos, ch) in s.bytes().enumerate().rev()
        {
            let ch = (ch - b'a') as usize;
            if last_pos[ch] == usize::MAX 
            {
                last_pos[ch] = pos;
                letters |= (1<<ch);
            }
            if letters == 0b00000011_11111111_11111111_11111111 { break; }
        }

        // [2] to obtain the lexicographically smallest string,
        //     we always have to print the smallest possible letter;
        //     thus, we first try to print all instances of each
        //     unique letter (see [4]) in the alphabetic order
        let mut lp: usize = 0;
        for (ch, &pos) in last_pos.iter().enumerate().filter(|&(_, pos)| *pos < usize::MAX)
        {
            let ch  = ch as u8 + b'a';
            
            // [3] if on some iteration there are letters on top
            //     of the stack that are smaller than the currently
            //     considered letter, move them to the paper
            while !stack.is_empty() && stack[stack.len()-1] <= ch
            {
                paper.push(stack.pop().unwrap());
            }

            // [4] main block where we move all instances of each 
            //     unique letter to the paper and push all encountered 
            //     characters (before the last instance) to the stack
            if lp <= pos
            {
                bytes[lp..=pos as usize]
                    .iter()
                    .for_each(|&c| if c == ch { paper.push(c); } else { stack.push(c); });
                lp = pos + 1;
            }
        }
        
        return String::from_utf8(paper).unwrap();
    }
}
```
As a bonus, I provide another (somewhat slower) [**solution**](https://leetcode.com/submissions/detail/820207916/) with **3 ms runtime** that follows a different logic.
```
impl Solution 
{
    pub fn robot_with_string(s: String) -> String 
    {
        let mut paper = String::with_capacity(s.len());
        let mut stack = Vec::<char>::with_capacity(s.len());
        
        // [1] in this solution, we keep track of remaining letters;
        //     first, we obtain counts of all letters in the string
        let mut count: [u32;26] = [0;26];
        s.bytes().for_each(|b| count[(b - b'a') as usize] += 1);

        // [2] second, we iterate over all characters and wait for the
        //     last occurence of each letter (in the alphabetic orer)
        let mut idx: usize = 0;
        for c in s.chars()
        {
            stack.push(c);
            count[(c as u8 - b'a') as usize] -= 1;

            // [3] update currently considered letter (i.e., 'idx' from 0 to 25)
            while idx < 26 && count[idx] == 0 { idx += 1; }
            
            // [4] print to paper all letters that are not greater than 
            //     the currently considered 'idx'
            while stack.is_empty() == false && ((stack[stack.len()-1] as u8) - b'a') as usize <= idx
            {
                paper.push(stack.pop().unwrap());
            }
        }
        
        return paper;
    }
}
```