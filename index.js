module.exports = function mapNumericalRange(value, start1, stop1, start2, stop2) {
    if (arguments.length !== 5) throw new TypeError("mapNumericalRange requires five arguments");
    return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};