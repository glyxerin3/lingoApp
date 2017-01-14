(function () {
    var app = angular.module('lingoApp');

    app.controller('lingoCtrl', LingoCtrl);
    
    function LingoCtrl($scope) {
        var vm = this;

        vm.generatedWord = "";
        vm.userdWord = "";
        vm.result = [false, false, false, false, false];

        vm.log = [];
        vm.index = 1;

        vm.generateRandomWord = function (wordLength) {
            var chars = "abcdefghijklmnopqrstuvwxyz";
            var randomText = "";

            for( var i = 0; i < wordLength; i++ ) {
                var charPosition = Math.floor(Math.random() * chars.length);
                randomText += chars.charAt(charPosition);
            }

            return randomText;
        };

        vm.generateWord = function () {
            vm.generatedWord = vm.generateRandomWord(5);
        };

        vm.checkWord = function (generatedWord, userWord) {
            var result = [];

            //console.log("generatedWord: " + generatedWord);
            //console.log("userWord: " + userWord);

            if (userWord == undefined) {
                return;
            }

            if (userWord == "") {
                return;
            }

            if (generatedWord.length !== userWord.length) {
                return result;
            }

            for (var i = 0; i < generatedWord.length; i++) {
                if (generatedWord[i] == userWord[i]) {
                    result.push(true);
                } else {
                    result.push(false)
                }
            }
            //console.log("result: " + result);

            vm.result = result;

            var currentLog = {
                number: vm.index++,
                word: userWord,
                result: result
            };

            vm.log.push(currentLog);

            return result;
        }
    }
})();