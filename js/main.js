//Global environment;
//record:{};
//parent:{null};

//Environment: global env
const  countSumNumber = function () {

    //countSumNumber env;
    //record: {}
    //parent: {global env};

    let total = 0;

    //countSumNumber env;
    //record: {total: 0 }
    //parent: {global env};

    //countSumNumber env;
    //record: {total: 3}
    //parent: {global env};

    //countSumNumber env;
    //record: {total: 8}
    //parent: {global env};


    //countSumNumber env;
    //record: {total: 20}
    //parent: {global env};

    //Environment: countSumNumber env;

    return function (number) {
    //Anonymus env;
    //record: {number: 3}
    //parent: {countSumNumber}

    //Anonymus env;
    //record: {number: 5}
    //parent: {countSumNumber}


    //Anonymus env;
    //record: {number: 20}
    //parent: {countSumNumber}

        total += number;
        return total;
    }
}

const sum = countSumNumber ();
//Global env;
//record: {countSumNumber: <function>, sum: <function>}
//parent: null

const firstSum = sum(3);
//Global env;
//record: {countSumNumber: <function>, sum: <function>, firstSum: 3}
//parent: null

const secondSum = sum(5);
//Global env;
//record: {countSumNumber: <function>, sum: <function>, firstSum: 3, secondSum: 5}
//parent: null

const thirdSum = sum(20);
//Global env;
//record: {countSumNumber: <function>, sum: <function>, firstSum: 3, secondSum: 5, thirdSum: 20}
//parent: null


console.log(firstSum, secondSum, thirdSum)