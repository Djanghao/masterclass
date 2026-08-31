# Erlang, C, Rust Solutions

**Author:** hjrand1005
**Votes:** 1
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3719537/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3719537/)

---

#### Erlang

```erlang
-spec gcd_of_strings(Str1 :: unicode:unicode_binary(), Str2 :: unicode:unicode_binary()) -> unicode:unicode_binary().

gcd_of_strings(Str1, Str2) ->
    DS1 = divfun(Str1),
    DS2 = divfun(Str2),
    gcd_str(Str1, DS1, Str2, DS2, <<"">>, <<"">>).

gcd_str(<<"">>, _, _, _, _, Greatest) -> Greatest;
gcd_str(_, _, <<"">>, _, _, Greatest) -> Greatest;
gcd_str(<<C:8, Rest1/binary>>, DS1, <<C:8, Rest2/binary>>, DS2, Acc, Greatest) ->
    Cand = <<Acc/binary, C:8>>,
    R1 = DS1(Cand),
    case DS1(Cand) andalso DS2(Cand) of
        true -> gcd_str(Rest1, DS1, Rest2, DS2, Cand, Cand);
        false -> gcd_str(Rest1, DS1, Rest2, DS2, Cand, Greatest)
    end;
gcd_str(_, _, _, _, _, Greatest) -> Greatest.

divfun(S) ->
    fun(X) ->
        N = byte_size(S) div byte_size(X),
        S =:= binary:copy(X, N)
    end.
```

---

#### C

What could be more fun that manipulating strings in C?

```c
int gcd(int a, int b) {
    int tmp;
    while (b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

char * gcdOfStrings(char * str1, char * str2){
    char *result;
    
    size_t n;
    size_t s1_len = strlen(str1);
    size_t s2_len = strlen(str2);
    size_t concat_len = s1_len + s2_len + 1;
    
    char *s1s2 = calloc(sizeof(char), concat_len);
    char *s2s1 = calloc(sizeof(char), concat_len);
    
    strncpy(s1s2, str1, s1_len);
    strncat(s1s2, str2, s2_len);
    
    strncpy(s2s1, str2, s2_len);
    strncat(s2s1, str1, s1_len);
    
    if (strncmp(s1s2, s2s1, s1_len + s2_len) != 0)
        result = calloc(sizeof(char), 1);
    else {
        n = gcd(s1_len, s2_len);
        result = calloc(sizeof(char), n+1);
        strncpy(result, str1, n);
    }
        
    free(s1s2);
    free(s2s1);
    return result;
}
```

---

#### Rust

```rust
impl Solution {
    pub fn gcd_of_strings(str1: String, str2: String) -> String {
        let mut end = 0;
        let mut candidate = String::new();

        for (c1, c2) in str1.chars().zip(str2.chars()) {
            if c1 != c2 {
                break;
            }
            candidate.push(c1);
            if Self::divides_both(&candidate, &str1, &str2) {
                end = candidate.len();
            }
        }
        String::from(&str1[..end])
    }
    
    fn divides_both(candidate: &str, s1: &str, s2: &str) -> bool {
        let clen = candidate.len();
        s1.len() % clen == 0
            && s2.len() % clen == 0
            && candidate.repeat(s1.len() / clen) == s1
            && candidate.repeat(s2.len() / clen) == s2
    }
}
```