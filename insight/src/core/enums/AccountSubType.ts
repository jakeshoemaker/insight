export enum AccountSubType {
	/// <summary>
	/// <para>Checking account</para>
	/// </summary>
	Checking,

	/// <summary>
	/// <para>Savings account</para>
	/// </summary>
	Savings,

	/// <summary>
	/// <para>Non-cash tax-advantaged medical Health Savings Account (HSA) (US)</para>
	/// </summary>
	Hsa,

	/// <summary>
	/// <para>Certificate of deposit account</para>
	/// </summary>
	Cd,

	/// <summary>
	/// <para>Money market account</para>
	/// </summary>
	MoneyMarket,

	/// <summary>
	/// <para>PayPal-issued credit card</para>
	/// </summary>
	Paypal,

	/// <summary>
	/// <para>Prepaid debit card</para>
	/// </summary>
	Prepaid,

	/// <summary>
	/// <para>A cash management account, typically a cash account at a brokerage</para>
	/// </summary>
	CashManagement,

	/// <summary>
	/// <para>An Electronic Benefit Transfer (EBT) account, used by certain public assistance programs to distribute funds (US only)</para>
	/// </summary>
	Ebt,

	/// <summary>
	/// <para>Bank-issued credit card</para>
	/// </summary>
	CreditCard,

	/// <summary>
	/// <para>Auto loan</para>
	/// </summary>
	Auto,

	/// <summary>
	/// <para>Business loan</para>
	/// </summary>
	Business,

	/// <summary>
	/// <para>Commercial loan</para>
	/// </summary>
	Commercial,

	/// <summary>
	/// <para>Construction loan</para>
	/// </summary>
	Construction,

	/// <summary>
	/// <para>Consumer loan</para>
	/// </summary>
	Consumer,

	/// <summary>
	/// <para>Home Equity Line of Credit (HELOC)</para>
	/// </summary>
	HomeEquity,

	/// <summary>
	/// <para>General loan</para>
	/// </summary>
	Loan,

	/// <summary>
	/// <para>Mortgage loan</para>
	/// </summary>
	Mortgage,

	/// <summary>
	/// <para>Pre-approved overdraft account, usually tied to a checking account</para>
	/// </summary>
	Overdraft,

	/// <summary>
	/// <para>Pre-approved line of credit</para>
	/// </summary>
	LineOfCredit,

	/// <summary>
	/// <para>Student loan</para>
	/// </summary>
	Student,

	/// <summary>
	/// <para>An account whose type could not be determined</para>
	/// </summary>
	Other,

	/// <summary>
	/// <para>Tax-advantaged college savings and prepaid tuition 529 plans (US)</para>
	/// </summary>
	_529,

	/// <summary>
	/// <para>Employer-sponsored money-purchase 401(a) retirement plan (US)</para>
	/// </summary>
	_401a,

	/// <summary>
	/// <para>Standard 401(k) retirement account (US)</para>
	/// </summary>
	_401k,

	/// <summary>
	/// <para>403(b) retirement savings account for non-profits and schools (US)</para>
	/// </summary>
	_403b,

	/// <summary>
	/// <para>Tax-advantaged deferred-compensation 457(b) retirement plan for governments and non-profits (US)</para>
	/// </summary>
	_457b,

	/// <summary>
	/// <para>Standard brokerage account</para>
	/// </summary>
	Brokerage,

	/// <summary>
	/// <para>Individual Savings Account (ISA) that pays interest tax-free (UK)</para>
	/// </summary>
	CashIsa,

	/// <summary>
	/// <para>Tax-advantaged Coverdell Education Savings Account (ESA) (US)</para>
	/// </summary>
	EducationSavingsAccount,

	/// <summary>
	/// <para>Fixed annuity</para>
	/// </summary>
	FixedAnnuity,

	/// <summary>
	/// <para>Guaranteed Investment Certificate (Canada)</para>
	/// </summary>
	Gic,

	/// <summary>
	/// <para>Tax-advantaged Health Reimbursement Arrangement (HRA) benefit plan (US)</para>
	/// </summary>
	HealthReimbursementArrangement,

	/// <summary>
	/// <para>Traditional Invididual Retirement Account (IRA) (US)</para>
	/// </summary>
	Ira,

	/// <summary>
	/// <para>Non-cash Individual Savings Account (ISA) (UK)</para>
	/// </summary>
	Isa,

	/// <summary>
	/// <para>Keogh self-employed retirement plan (US)</para>
	/// </summary>
	Keogh,

	/// <summary>
	/// <para>Life Income Fund (LIF) retirement account (Canada)</para>
	/// </summary>
	Lif,

	/// <summary>
	/// <para>Life insurance account</para>
	/// </summary>
	LifeInsurance,

	/// <summary>
	/// <para>Locked-in Retirement Account (LIRA) (Canada)</para>
	/// </summary>
	Lira,

	/// <summary>
	/// <para>Locked-in Retirement Income Fund (LRIF) (Canada)</para>
	/// </summary>
	Lrif,

	/// <summary>
	/// <para>Locked-in Retirement Savings Plan (Canada)</para>
	/// </summary>
	Lrsp,

	/// <summary>
	/// <para>Mutual fund account</para>
	/// </summary>
	MutualFund,

	/// <summary>
	/// <para>A non-taxable brokerage account that is not covered by a more specific subtype</para>
	/// </summary>
	NonTaxableBrokerageAccount,

	/// <summary>
	/// <para>An annuity account not covered by other subtypes</para>
	/// </summary>
	OtherAnnuity,

	/// <summary>
	/// <para>An insurance account not covered by other subtypes</para>
	/// </summary>
	OtherInsurance,

	/// <summary>
	/// <para>Standard pension account</para>
	/// </summary>
	Pension,

	/// <summary>
	/// <para>Prescribed Registered Retirement Income Fund (Canada)</para>
	/// </summary>
	Prif,

	/// <summary>
	/// <para>Plan that gives employees share of company profits</para>
	/// </summary>
	ProfitSharingPlan,

	/// <summary>
	/// <para>Qualifying share account</para>
	/// </summary>
	Qshr,

	/// <summary>
	/// <para>Registered Disability Savings Plan (RSDP) (Canada)</para>
	/// </summary>
	Rdsp,

	/// <summary>
	/// <para>Registered Education Savings Plan (Canada)</para>
	/// </summary>
	Resp,

	/// <summary>
	/// <para>Retirement account not covered by other subtypes</para>
	/// </summary>
	Retirement,

	/// <summary>
	/// <para>Restricted Life Income Fund (RLIF) (Canada)</para>
	/// </summary>
	Rlif,

	/// <summary>
	/// <para>Roth IRA (US)</para>
	/// </summary>
	Roth,

	/// <summary>
	/// <para>Employer-sponsored Roth 401(k) plan (US)</para>
	/// </summary>
	Roth401k,

	/// <summary>
	/// <para>Registered Retirement Income Fund (RRIF) (Canada)</para>
	/// </summary>
	Rrif,

	/// <summary>
	/// <para>Registered Retirement Savings Plan (Canadian, similar to US 401(k))</para>
	/// </summary>
	Rrsp,

	/// <summary>
	/// <para>Salary Reduction Simplified Employee Pension Plan (SARSEP), discontinued retirement plan (US)</para>
	/// </summary>
	Sarsep,

	/// <summary>
	/// <para>Simplified Employee Pension IRA (SEP IRA), retirement plan for small businesses and self-employed (US)</para>
	/// </summary>
	SepIra,

	/// <summary>
	/// <para>Savings Incentive Match Plan for Employees IRA, retirement plan for small businesses (US)</para>
	/// </summary>
	SimpleIra,

	/// <summary>
	/// <para>Self-Invested Personal Pension (SIPP) (UK)</para>
	/// </summary>
	Sipp,

	/// <summary>
	/// <para>Standard stock plan account</para>
	/// </summary>
	StockPlan,

	/// <summary>
	/// <para>Tax-Free Savings Account (TFSA), a retirement plan similar to a Roth IRA (Canada)</para>
	/// </summary>
	Tfsa,

	/// <summary>
	/// <para>Account representing funds or assets held by a trustee for the benefit of a beneficiary. Includes both revocable and irrevocable trusts.</para>
	/// </summary>
	Trust,

	/// <summary>
	/// <para>'Uniform Gift to Minors Act' (brokerage account for minors, US)</para>
	/// </summary>
	Ugma,

	/// <summary>
	/// <para>'Uniform Transfers to Minors Act' (brokerage account for minors, US)</para>
	/// </summary>
	Utma,

	/// <summary>
	/// <para>Tax-deferred capital accumulation annuity contract</para>
	/// </summary>
	VariableAnnuity,

	/// <summary>
	/// <para>Catch-all for unknown values returned by Plaid. If you encounter this, please check if there is a later version of the Going.Plaid library.</para>
	/// </summary>
	Undefined,
}
