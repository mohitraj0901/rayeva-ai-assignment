const {
 generateCategoryAI,
 generateProposalAI
} = require("../services/geminiService");

exports.generateCategory = async (req, res) => {

try {

const { description } = req.body;

const result = await generateCategoryAI(description);

res.json(result);

} catch (error) {

res.status(500).json({ error: error.message });

}

};

exports.generateProposal = async (req, res) => {

try {

const { budget, clientType } = req.body;

const result = await generateProposalAI(budget, clientType);

res.json(result);

} catch (error) {

res.status(500).json({ error: error.message });

}

};