# Simple DP Swift Solution 100% Faster

**Author:** hsdsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/3302459/](https://leetcode.com/problems/maximize-grid-happiness/solutions/3302459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use DP with the configuration of the last row as the state and max happiness.
# Approach
<!-- Describe your approach to solving the problem. -->
First, prepare all row patterns.  You can select rows by remained counts in the states. Then you must caliculate the impact between the last and current rows.  I used the deeply nested dictionary because I can not use the tupple of Int as a dictionary key. As a result, the code has become longer. 

# Code
```
class Solution {
    func getMaxGridHappiness(_ m: Int, _ n: Int, _ introvertsCount: Int, _ extrovertsCount: Int) -> Int {
        //Generate all row patterns
        //  intro position as mask
        //  intro count
        //  extro position as mask
        //  extro count
        //  happiness
        var ps :[(Int,Int,Int,Int,Int)] = []
        let mic = min(m, introvertsCount)
        let mec = min(m, extrovertsCount)
        for im in 0..<(1<<m){
            for em in 0..<(1<<m){
                if im&em == 0 && im.nonzeroBitCount <= mic && em.nonzeroBitCount <= mec {
                    var v = im.nonzeroBitCount*120+em.nonzeroBitCount*40
                    let am = im|em
                    if im&1 > 0 && am&2 > 0 { v -= 30}
                    if em&1 > 0 && am&2 > 0 { v += 20}
                    for i in 1..<m {
                        let cmb = 1<<(i-1)
                        let cm = 1<<i
                        let cma = 1<<(i+1)
                        if im&cm > 0 {
                            if am&cmb > 0 {v -= 30 }
                            if am&cma > 0 {v -= 30 }
                        }
                        if em&cm > 0 {
                            if am&cmb > 0 {v += 20 }
                            if am&cma > 0 {v += 20 }                             
                        }
                    }
                    ps.append((im, im.nonzeroBitCount, em, em.nonzeroBitCount, v))
                }
            }
        }
        var ret = 0
        // DP with state
        //  intro position of last row as mask
        //  intro count available
        //  extro position  of last row as mask
        //  extro count available
        //  happiness
        var dp: [(Int,Int,Int,Int,Int)] = [(0,introvertsCount,0,extrovertsCount,0)]
        for _ in 0..<n {
            var ndp: [Int:[Int:[Int:[Int:Int]]]] = [:] 
            for dpi in dp {
                for psi in ps {
                    let (oim, oic, oem, oec, v) = dpi
                    let (im, imc, em, emc, rv) = psi
                    if oic >= imc && oec >= emc {
                        var nv = v+rv
                        //The impact of the current row on the last one.
                        nv -= (oim&(im|em)).nonzeroBitCount*30
                        nv += (oem&(im|em)).nonzeroBitCount*20
                        //The impact of the last row on the current.
                        nv -= (im&(oim|oem)).nonzeroBitCount*30
                        nv += (em&(oim|oem)).nonzeroBitCount*20
                        if !ndp.keys.contains(im) {
                            ndp[im] = [:]
                        }
                        if !ndp[im]!.keys.contains(oic-imc) {
                            ndp[im]![oic-imc] = [:]
                        }
                        if !ndp[im]![oic-imc]!.keys.contains(em) {
                            ndp[im]![oic-imc]![em] = [:]
                        }
                        if let dv = ndp[im]![oic-imc]![em]![oec-emc] {
                            ndp[im]![oic-imc]![em]![oec-emc] = max(dv, nv)
                        } else {
                            ndp[im]![oic-imc]![em]![oec-emc] = nv
                        }
                        ret = max(ret, nv)
                    }
                }
            }
            dp = []
            for (nim, ndpn)  in ndp {
                for (nic, ndpnn) in ndpn {
                    for (nem, ndpl) in ndpnn {
                        for (nec,v)  in ndpl {
                            dp.append((nim, nic, nem,  nec, v))
                        }
                    }
                }
            }
        }
        return ret
    }
}
```