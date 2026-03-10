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
// Berekening uitvoeren (schudden)
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
            ans = Math.sqrt(A * A + B * B)
        } else if (op == 5) {
            if (A >= B) {
                ans = Math.sqrt(A * A - B * B)
            } else {
                basic.showString("error")
            }
        } else if (op == 6) {
            ans = A * A
        } else if (op == 7) {
            ans = A * B
        } else if (op == 8) {
            ans = A * A * 3.14159
        } else if (op == 9) {
            ans = A * A * 3.14159 / 4
        }
        // Weergave resultaat
        if (op >= 8 || op == 4 || op == 5 || op == 3 && B < 0) {
            basic.showString("" + (formatDec(ans, 2)))
        } else {
            basic.showNumber(ans)
        }
    }
    lastS = now
})
// Operator wisselen (Menu)
input.onButtonPressed(Button.AB, function () {
    op = (op + 1) % 10
    if (op == 0) {
        // +
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (op == 1) {
        // *
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
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
        // Lange zijde Pythagoras
        basic.showString("L")
    } else if (op == 5) {
        // Korte zijde Pythagoras
        basic.showString("K")
    } else if (op == 6) {
        // Oppervlakte Vierkant (A²)
        basic.showString("V")
    } else if (op == 7) {
        // Oppervlakte Rechthoek (AxB)
        basic.showString("R")
    } else if (op == 8) {
        // Oppervlakte Cirkel Straal (r²*pi)
        basic.showString("C")
    } else if (op == 9) {
        // Oppervlakte Cirkel Diameter ((d²*pi)/4)
        basic.showString("D")
    }
})
// Getal B verhogen
input.onButtonPressed(Button.B, function () {
    B = (B + 1) % 101
    basic.showNumber(B)
})
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
// --- Globale Variabelen ---
let res = 0
op = -1
