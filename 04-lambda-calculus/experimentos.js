Number.prototype.log = function() {
    console.log(this)
}
Function.prototype.log = function() {
    console.log(this.toString())
}

//Definindo uma Lambda
const I  = a => a
r = I(3)
r.log()

r = I(I)
r.log()

const SELF = f => f(f)
r = SELF(I)
r.log()

// Lambda que retorna o primeiro item
const PRI = a => b => a
r = PRI(7)(8)
r.log()

// Lambda que retorna o ultimo item
const ULT = a => b => b
r = ULT(7)(8)
r.log()

// Lambda que troca os valores dos itens
const TRO = f => a => b => f(b)(a)
r = TRO(ULT)(7)(11)
r.log()

r = TRO(PRI)(2)(1)
r.log()

// Definição de True e False
const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

//NOT
const NOT = a => a(F)(T)
r = NOT(T)
r.log()
r = NOT(F)
r.log()

// AND
const AND = a => b => a(b)(F)
r = AND(T)(F)
r.log()
r = AND(T)(T)
r.log()
r = AND(F)(F)
r.log()

// OR
const OR = a => b => a(T)(b)
r = OR(T)(F)
r.log()
r = OR(T)(T)
r.log()
r = OR(F)(F)
r.log()

// EQUAL
const EQ = a => b => a(b)(NOT(b))
r = EQ(F)(T)
r.log()
r = EQ(T)(F)
r.log()
r = EQ(T)(T)
r.log()
r = EQ(F)(F)
r.log()

// XOR
const XOR = a => b => NOT(EQ(a)(b))
r = XOR(F)(T)
r.log()
r = XOR(T)(F)
r.log()
r = XOR(T)(T)
r.log()
r = XOR(F)(F)
r.log()