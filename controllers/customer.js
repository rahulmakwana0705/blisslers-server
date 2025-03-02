const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
    try {
        const { name, mobile, email, proposalsAwaiting, approveProposal, expiredProposal, unapprovedProposal } = req.body;
        
        const customer = await Customer.create({ 
            name, 
            mobile, 
            email, 
            proposalsAwaiting, 
            approveProposal, 
            expiredProposal, 
            unapprovedProposal 
        });
        
        res.status(201).json({
            success: true,
            message: "customer created successfully",
            customer: customer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, mobile, proposalsAwaiting, approveProposal, expiredProposal, unapprovedProposal } = req.body;
        
        const customer = await Customer.findByIdAndUpdate(id, { name, mobile, proposalsAwaiting, approveProposal, expiredProposal, unapprovedProposal }, { new: true });
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'customer not found'
            });
        }

        res.status(200).json({
            success: true,
            message: "customer updated successfully",
            customer: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};  

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        
        res.status(200).json({
            success: true,
            message: "customers fetched successfully",
            customers: customers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const customer = await Customer.findById(id);
        
        res.status(200).json({
            success: true,
            message: "customer fetched successfully",
            customer: customer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        
        const customer = await Customer.findByIdAndDelete(id);
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'customer not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: "customer deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


