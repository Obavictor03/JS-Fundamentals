const arg = process.argv[2]

const x = Math.floor(Number(arg))

if (isNaN(x)) {
    console.log("Missing number of occurrences")
} else {
    for(i = 0; i < x; i++) {
        console.log("C is fun")
    }
}