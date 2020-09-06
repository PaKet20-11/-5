jQuery(document).ready(function($){
		const btnCreate = $('.p-btn-create');
		const btnChange = $('.p-btn-replace');

		const changeVar1 = $('.place_var1');
		const changeVar2 = $('.place_var2');
		const changeVar3 = $('.place_var3');
		const changeVar4 = $('.place_var4');
		const changeVar5 = $('.place_var5');
		const changeVar6 = $('.place_var6');

		const speachChange = $('.place_speach');

		const defaultTexte = $('.p-text');
		const defaultText = {
			"text":[
			"Жили-были {var1} да {var2}",
			"Была у них {var3}",
			"Снесла {var3} {var4}, не простое - золотое",
			"- {var1} бил, бил - не разбил",
			"- {var2} била, била - не разбила",
			"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
			"{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
			]
		};

		btnCreate.click(function() {
			defaultTexte.html(defaultText.text);
		})

		btnChange.click(function() {
			console.log('Кто прочитал тот лох!')
			const Var1 = changeVar1.val();
			const Var2 = changeVar2.val();
			const Var3 = changeVar3.val();
			const Var4 = changeVar4.val();
			const Var5 = changeVar5.val();
			const Var6 = changeVar6.val();
			const speach = speachChange.val();

			const changedText = {
			"text":[
			`Жили-были ${Var1} да ${Var2}`,
			`Была у них ${Var3}`,
			`Снесла ${Var3} ${Var4}, не простое - золотое`,
			`- ${Var1} бил, бил - не разбил`,
			`- ${Var2} била, била - не разбила`,
			`${Var5} бежала, ${Var6} задела, ${Var4} упало и разбилось.`,
			`${Var1} плачет, ${Var2} плачет, а ${Var3} кудахчет:","${speach}`
			]
		};

			defaultTexte.html(changedText.text);
		})
});
