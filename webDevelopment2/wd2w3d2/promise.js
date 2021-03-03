
function getNumber(num) {
	return new Promise(function(resolve, reject) {
			// numが3以上ならnumを返し、3未満なら"Falied!"のメッセージを返す
			if (num >= 3) {
					setTimeout(function() {
							resolve(num);
					}, 1000);
			} else {
					reject("Falied!");    
			}
	});  
}

// 今回は3を渡しているので、resolveから3が返ってくる
getNumber(3).then(function(result) {
	console.log(result);
	//numに3を加算して、getNumberに返している
	return result + 3;
}).then(function(result) {
	//上と同じ処理の繰り返し。これがチェイン
	console.log(result);
	return result + 3;
}).then(function(result) {
	// 最終結果として、numに6を加算した数を表示
	console.log(result);
}, function(err){
	// 3未満の場合はrejectが呼び出され、"Falied!"のメッセージが表示される
	console.log(err);
});