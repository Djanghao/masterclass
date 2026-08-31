# simple and easy solution, TWO LINER TS SOLUTION MADMAN | Typescript/JS RUST NOOB

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3050878/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3050878/)

---

# TWO LINER MADMAN
```
function numSub(s: string): number {
    // or [1-nth] * ([1-nth] + 1) / 2
    // using regex
    const temp_strings: string[] | null = s.match(/1+/g);
    return temp_strings ? temp_strings.reduce((prevSum, currStr)=>prevSum+(currStr.length*(currStr.length+1)/2),0) % (10**9+7) : 0;
};
```

# Rust Code
```
impl Solution {
    pub fn num_sub(s: String) -> i32 {
        const MODULO: i64 = 10_i64.pow(9) + 7;
        let mut count: i64 = 0;
        let mut temp_count_1: i64 = 0;
        for (i, c) in s.chars().enumerate(){
            if c != '1'{
                count += (temp_count_1 * (temp_count_1+1)/2);
                temp_count_1 = 0;
                continue;
            }
            temp_count_1 += 1;
        }
        count += (temp_count_1 * (temp_count_1+1)/2);
        return (count % MODULO) as i32;
    }
}
```

# Typescript Code
```
function numSub(s: string): number {
    // or [1-nth] * ([1-nth] + 1) / 2
    let count: number = 0;
    let temp_count_1: number = 0;
    for (let i = 0; i <= s.length; i += 1){
        if (i === s.length || s[i] !== "1"){
            count += (temp_count_1*(temp_count_1+1)/2)
            temp_count_1 = 0;
            continue;
        }
        temp_count_1 += 1;
    }
    return count % (10**9+7);

    // 1
    // 1 :: 1

    // 11
    // 12 :: 3

    // 111
    // 123 :: 6

    // below is the solution
    // let count: number = 0;
    // let temp_count: number = 1;
    // for (let i = 0; i <= s.length; i += 1){
    //     if (i === s.length || s[i] !== "1" ) {
    //         temp_count = 1;
    //         continue;
    //     }
    //     count += temp_count;
    //     temp_count += 1;
    // }
    // return count % (10**9+7);
};
```