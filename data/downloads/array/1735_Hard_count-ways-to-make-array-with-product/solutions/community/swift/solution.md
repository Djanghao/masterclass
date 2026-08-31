# Swift prime factorization and combinatorics solution

**Author:** hsdsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3437597/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/3437597/)

---


# Code
```
class Solution {
    func factorize(_ ww: Int) -> [Int:Int] {
            var fm: [Int:Int] = [:]
            var d = 2
            var w = ww
            while w%d == 0 {
                fm[d] = fm[d, default:0]+1
                w /= d
            }
            d = 3
            while d*d <= w {
                while w%d == 0 {
                    fm[d] = fm[d, default:0]+1
                    w /= d
                }
                d += 2
            }
            if w > 1 {
                fm[w] = fm[w, default:0]+1
            }
            return fm
    }
    func waysToFillArray(_ queries: [[Int]]) -> [Int] {
        var ret:[Int] = []
        for q in queries {
            //print("q:",q)
            if q[0] == 1 { 
                ret.append(1)
                continue
            }
            var fm: [Int:Int] = factorize(q[1])
            var r = 1
            //print(fm)
            for (_, c) in fm {
                let a = max(c, q[0]-1)
                let b = min(c, q[0]-1)
                var ff = Array((a+1)...(a+b))
                var bi = b
                //print(a,b, ff)
                if b > 1 {
                    for bi in 2...b {
                        for (bb,bc) in factorize(bi) {
                            var c = bc
                            for i in 0..<ff.count {
                                while c > 0 && ff[i]%bb == 0 {
                                    ff[i] /= bb
                                    c -= 1
                                }
                                if c == 0 { break }
                                if i == ff.count-1 { print("???",bi, ff) }
                            }
                        }
                    }
                }
                //print(a,b, ff)
                for i in 0..<ff.count {
                    r = (r*ff[i])%1000000007
                }
            }
            ret.append(r)

        }
        return ret
    }
}
```