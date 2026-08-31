# 100% Extreme FP Clean, Concise Solutions

**Author:** Kalz337
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/5392378/](https://leetcode.com/problems/evaluate-division/solutions/5392378/)

---

Clean, Readable Version w/ Control Flow

```
    def calcEquation(eq: List[List[String]], vals: Array[Double], q: List[List[String]]): Array[Double] = 

       val m = Map.empty[String,Map[String,Double]]

       val fn = (a:String, b:String,r:Double) => 
          m.getOrElseUpdate(a,Map())(b) = r
          m.getOrElseUpdate(b,Map())(a) = 1.0/r

       eq.zipWithIndex.foreach: 
         case (List(a,b), i) => fn(a,b,vals(i))
         case _ =>

       m.foreach: (a,ratios) => 
        ratios.foreach: (b, ab) => 
            m(b).foreach: (c, bc) =>
              fn(a, c, ab * bc)

       val ans = Array.fill(q.size)(-1.0)
       q.zipWithIndex.foreach: 
        case (List(a,b), i) => 
          m.contains(a) && m.contains(b) match 
           case true => (m(b).contains(a)) match
               case true => 
                ans(i) = 1 / m(b)(a)
               case false => 
                m(b).keys.find(m(a).contains) match
                  case Some(x) =>
                    ans(i) = m(a)(x) / m(b)(x)
                    fn(a,b,ans(i))
                  case None => 
           case _ =>
        case _ =>

       ans
}
```

## super condensed , functional

```
def calcEquation(eq: List[List[String]], vals: Array[Double], q: List[List[String]]): Array[Double] = 
  val m = Map.empty[String,Map[String,Double]]
  val up = (a:String,b:String,r:Double) => m.getOrElseUpdate(a,Map())(b) = r 
  val fn = (a:String, b:String,r:Double) => {up(a,b,r);up(b,a,1/r)}

  eq.zip(vals).foreach{(x,y)=> fn(x(0),x(1),y)}

  m.foreach{(a,r)=> r.foreach{(b,ab)=>m(b).foreach{(c,bc)=>
      fn(a,c,ab*bc) }}}

  q.map { x => val (a,b) = (x(0),x(1))
    if !m.contains(a) || !m.contains(b) then -1.0
    else if m(b).contains(a) then 1/m(b)(a)
    else m(b).keys.find(m(a).contains) match
      case Some(c) => val y = m(a)(c)/m(b)(c);fn(a,b,y);y
      case _ => -1.0
    }.toArray 


```