# rust 25ms ugly solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/5463651/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/5463651/)

---

![image.png](./images/0.png)

# Intuition
For this question you may have to consider different situations, that makes this problem complicated.

Think about the overlap part and the part within the seperate range.


# Complexity
- Time complexity:
$$O(n\\log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn can_make_palindrome_queries(s: String, queries: Vec<Vec<i32>>) -> Vec<bool> {
        let s=s.as_bytes();
        let n=s.len()/2;
        let s1=&s[..n];
        let s2=&s[n..];
        let mut l=n;
        let mut r=0;

        let mut eq_v=Vec::new();
        let mut prev=n;
        for i in 0..n{
            if prev==n&&s1[i]==s2[n-1-i]{
                prev=i;
            }else if prev<n&&s1[i]!=s2[n-1-i]{
                eq_v.push((prev, i-1));
                prev=n;
            }
        }

        for i in 0..n{
            if s1[i]!=s2[n-1-i]{
                l=i;
                break;
            }
        }
        if l==n{return vec![true; queries.len()];}
        for i in 0..n{
            if s1[n-1-i]!=s2[i]{
                r=n-1-i;
                break;
            }
        }
        let mut c1=vec![[0; 26]; r-l+1];
        let mut c2=vec![[0; 26]; r-l+1];
        let mut p1=[0; 26];
        let mut p2=[0; 26];
        for i in l..=r{
            p1[(s1[i]-b'a')as usize]+=1;
            c1[i-l]=p1;
            p2[(s2[n-1-i]-b'a')as usize]+=1;
            c2[i-l]=p2;
        }
        if p1 != p2{
            return vec![false; queries.len()];
        }

        let mut res=Vec::new();
        for q in &queries{
            let mut r1=(q[0] as usize, q[1] as usize);
            let mut r2=(2*n-1-q[3] as usize, 2*n-1-q[2] as usize);
            if r1.0.min(r2.0)>l||r1.1.max(r2.1)<r{
                res.push(false);
                continue;
            }
            if r1.1<l||r1.0>r{
                res.push(r2.0<=l&&r2.1>=r);
                continue;
            }
            if r2.1<l||r2.0>r{
                res.push(r1.0<=l&&r1.1>=r);
                continue;
            }
            r1.0=r1.0.max(l);
            r1.1=r1.1.min(r);
            r2.0=r2.0.max(l);
            r2.1=r2.1.min(r);
            if r1.0==r2.0&&r1.1==r2.1{
                res.push(true);
                continue;
            }
            if r1.1<r2.0&&r2.0-r1.1>1{
                let tmp=eq_v.binary_search_by_key(&(r1.1+1), |i|i.0);
                let tmp=match tmp{
                    Ok(i)=>i,
                    Err(i)=>i-1
                };
                res.push(tmp<eq_v.len()
                &&eq_v[tmp].1>=(r2.0-1)
                &&Self::get_count(&c1,l,r,r1)==Self::get_count(&c2,l,r,r1)
                &&Self::get_count(&c1,l,r,r2)==Self::get_count(&c2,l,r,r2));
                continue;
            }
            let mut sc1=Self::get_count(&c1, l, r, r1);
            let mut sc2=Self::get_count(&c2, l, r, r2);
            if r1.0>r2.0{
                let tmp=Self::get_count(&c1, l, r, (r2.0, r1.0-1));
                for i in 0..26{
                    sc2[i]-=tmp[i];
                }
            }else if r1.0<r2.0{
                let tmp=Self::get_count(&c2, l, r, (r1.0, r2.0-1));
                for i in 0..26{
                    sc1[i]-=tmp[i];
                }
            }
            if r1.1<r2.1{
                let tmp=Self::get_count(&c1, l, r, (r1.1+1, r2.1));
                for i in 0..26{
                    sc2[i]-=tmp[i];
                }
            }else if r1.1>r2.1{
                let tmp=Self::get_count(&c2, l, r, (r2.1+1, r1.1));
                for i in 0..26{
                    sc1[i]-=tmp[i];
                }
            }
            res.push(sc1==sc2&&sc1.iter().filter(|c|**c<0).count()==0);
        }
        res
    }

    fn get_count(c: &Vec<[i32; 26]>, l: usize, r:usize, range: (usize, usize))->[i32; 26]{
        if range.0==l{
            c[range.1-l]
        }else{
            let mut res=[0; 26];
            for i in 0..26{
                res[i]=c[range.1-l][i]-c[range.0-l-1][i];
            }
            res
        }
    }
}
```