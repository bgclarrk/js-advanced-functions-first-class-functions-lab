const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(miles) {
        return miles * fare;
    };
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(1) * 2;
};

const fareTripler = function(fare) {
    return createFareMultiplier(fare)(1) * 3;
};

function selectDifferentDrivers(drivers, functionArg) {
    return functionArg(drivers);
}