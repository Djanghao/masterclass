# Rust, Faster than 100%

**Author:** a_table_saw
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2851525/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2851525/)

---

My competition submission.  I noticed a couple weeks later once the runtime distributions were in that this was off the left end of the runtime charts at 49ms! This really does not attempt any sort of optimization, it just restarts once it realizes the current attempt is invalid.  

I believe (correct me if I'm wrong) that doing it this way is still linear time.  You will only reiterate over log10(n) messages, so O(n + log10(n)) == O(n)

```
impl Solution {
    pub fn split_message(message: String, limit: i32) -> Vec<String> {
        let len = message.len();
            if limit <= 5 {
                return Vec::new()
            }
       
        let mut msglen = (limit - 5) as usize;
        let mut splits = Vec::<String>::new();
        let mut pow10 = 10;
        let mut pow = 1;
        let mut pow10local = 10;
        let mut powlocal = 1;
        let mut nmsg = 0;
        let mut stridx = 0;
        loop {
            nmsg += 1;
            // Naive impl: just restart once we hit the next pow10 for nmsg
            if nmsg == pow10 {
                // Bump these
                pow10 *= 10;
                pow += 1;
                // Reset these
                pow10local = 10;
                powlocal = 1;
                nmsg = 0;
                stridx = 0;
                if limit <= (3 + pow + powlocal) {
                    return Vec::new()
                }
                msglen = limit as usize - (3 + pow + powlocal) as usize;
 //               println!("{:?}", splits);
                splits.clear();
                continue;
            }

            if nmsg == pow10local {
                pow10local *= 10;
                powlocal += 1;
                if limit <= (3 + pow + powlocal) {
                    return Vec::new()
                }
                msglen = limit as usize - (3 + pow + powlocal) as usize;
            }

 
            if msglen <= 0 {
                return Vec::new();
            }

            let mut finish = false;
            if (msglen + stridx) as usize >= len {
                finish = true;
                if limit <= (3 + pow + powlocal) {
                    return Vec::new()
                }
                msglen = len - stridx as usize; 
            }
            splits.push(String::from(&message[stridx..(stridx + msglen)]));
            stridx += msglen;
            if finish {
                break
            }
        }
//        println!("{}", nmsg);
        let output: Vec<String> = splits.iter().enumerate().map(|x| {
            return String::from(format!("{}<{}/{}>", x.1, x.0 + 1, nmsg))
        }).collect();
        return output
    }
}
```