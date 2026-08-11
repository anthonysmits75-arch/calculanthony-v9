// machten
function pow2 (g: number, e: number) {
    if (e == 0) {
        return 1
    }
    if (g == 0) {
        return 0
    }
    res = 1
    base = g
    exp = Math.abs(e)
    while (exp > 0) {
        if (exp % 2 == 1) {
            res *= base
        }
        base *= base
exp = Math.idiv(exp, 2)
    }
    return e < 0 ? 1 / res : res
}
// komma getallen
function formatDec (n: number, decimals: number) {
    integerPart = Math.floor(n)
    s = "" + integerPart + "."
    remainder = Math.abs(n - integerPart)
    for (let index = 0; index < decimals; index++) {
        remainder *= 10
digit = Math.floor(remainder)
        s = "" + s + digit
        remainder += 0 - digit
    }
    return s
}
// Getal A
input.onButtonPressed(Button.A, function () {
    A = (A + 1) % 101
    basic.showNumber(A)
})
// Berekening
input.onGesture(Gesture.Shake, function () {
    now = input.runningTime()
    if (now - lastS < 1500) {
        A = 0
        B = 0
        op = -1
        ans = 0
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else {
        if (op == 0) {
            ans = A + B
        } else if (op == 1) {
            ans = A * B
        } else if (op == 2) {
            if (B != 0) {
                ans = Math.idiv(A, B)
            } else {
                basic.showString("error")
            }
        } else if (op == 3) {
            ans = pow2(A, B)
        } else if (op == 4) {
            // Pythagoras: Lange zijde
            ans = Math.sqrt(A * A + B * B)
        } else if (op == 5) {
            // Pythagoras: Korte zijde
            if (A >= B) {
                ans = Math.sqrt(A * A - B * B)
            } else {
                basic.showString("error")
            }
        } else if (op == 6) {
            // Hoek alpha
            if (A > 0 && B > 0) {
                ans = Math.atan2(A, B) * (180 / 3.14159)
            } else {
                basic.showString("error")
            }
        } else if (op == 7) {
            // Hoek beta
            if (A > 0 && B > 0) {
                ans = Math.atan2(B, A) * (180 / 3.14159)
            } else {
                basic.showString("error")
            }
        } else if (op == 8) {
            // Hoeken van groot naar klein
            if (A > 0 && B > 0) {
                angA = Math.atan2(A, B) * (180 / 3.14159)
                angB = 90 - angA
                maxAng = Math.max(angA, angB)
                minAng = Math.min(angA, angB)
                basic.showString("90 " + formatDec(maxAng, 1) + " " + formatDec(minAng, 1))
                lastS = now
                return
            } else {
                basic.showString("error")
            }
        } else if (op == 9) {
            // Vierkant (A²)
            ans = A * A
        } else if (op == 10) {
            // Driehoek oppervlakte (dH)
            ans = A * B / 2
        } else if (op == 11) {
            // Rechthoek (AxB)
            ans = A * B
        } else if (op == 12) {
            // Straal
            ans = A * A * 3.14159
        } else if (op == 13) {
            // Diameter
            ans = A * A * 3.14159 / 4
        } else if (op == 14) {
            // GGD (Grootste Gemene Deler)
            x = A
            y = B
            while (y != 0) {
                temp = y
                y = x % y
                x = temp
            }
            ans = x
        } else if (op == 15) {
            // KGV (Kleinste Gemene Veelvoud)
            if (A > 0 && B > 0) {
                x2 = A
                y2 = B
                while (y2 != 0) {
                    temp2 = y2
                    y2 = x2 % y2
                    x2 = temp2
                }
                ans = A * B / x2
            } else {
                ans = 0
            }
        } else if (op == 16) {
            // Percentage (PC): A% van B
            ans = A * B / 100
        } else if (op == 17) {
            // Modulo (Mo): Rest van A / B
            if (B != 0) {
                ans = A % B
            } else {
                basic.showString("error")
            }
        } else if (op == 18) {
            ans = A - B
        }
        // resultaat
        if (op >= 12 && op <= 13 || op == 4 || op == 5 || op == 6 || op == 7 || op == 10 || op == 16 || op == 3 && B < 0) {
            basic.showString("" + (formatDec(ans, 2)))
        } else {
            basic.showNumber(ans)
        }
    }
    lastS = now
})
// keuze
input.onButtonPressed(Button.AB, function () {
    op = (op + 1) % 19
    if (op == 0) {
        // +
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (op == 1) {
        // *
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (op == 2) {
        // :
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (op == 3) {
        // ^
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (op == 4) {
        // Lange zijde
        basic.showString("L")
    } else if (op == 5) {
        // Korte zijde
        basic.showString("K")
    } else if (op == 6) {
        // Hoek alpha
        basic.showString("aA")
    } else if (op == 7) {
        // Hoek beta
        basic.showString("aB")
    } else if (op == 8) {
        // Hoeken van groot naar klein
        basic.showString("HK")
    } else if (op == 9) {
        // Vierkant (A²)
        basic.showString("V")
    } else if (op == 10) {
        // Driehoek oppervlakte
        basic.showString("dH")
    } else if (op == 11) {
        // Rechthoek (AxB)
        basic.showString("R")
    } else if (op == 12) {
        // Straal
        basic.showString("C")
    } else if (op == 13) {
        // Diameter
        basic.showString("D")
    } else if (op == 14) {
        // GGD
        basic.showString("GD")
    } else if (op == 15) {
        // KGV
        basic.showString("KV")
    } else if (op == 16) {
        // Percentage
        basic.showString("PC")
    } else if (op == 17) {
        // Modulo
        basic.showString("Mo")
    } else if (op == 18) {
        // Aftrekken
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
})
// Getal B verhogen
input.onButtonPressed(Button.B, function () {
    B = (B + 1) % 101
    basic.showNumber(B)
})
let temp2 = 0
let y2 = 0
let x2 = 0
let temp = 0
let y = 0
let x = 0
let minAng = 0
let maxAng = 0
let angB = 0
let angA = 0
let ans = 0
let B = 0
let lastS = 0
let now = 0
let A = 0
let digit = 0
let s = ""
let integerPart = 0
let exp = 0
let op = 0
let remainder = 0
let base = 0
let res = 0
op = -1
