# Python concise solution.

**Author:** OldCodingFarmer
**Votes:** 86
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/62139/](https://leetcode.com/problems/rectangle-area/solutions/62139/)

---

        
    def computeArea(self, A, B, C, D, E, F, G, H):
        overlap = max(min(C,G)-max(A,E), 0)*max(min(D,H)-max(B,F), 0)
        return (A-C)*(B-D) + (E-G)*(F-H) - overlap