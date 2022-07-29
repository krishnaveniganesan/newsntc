// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class Beneficiary
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject beneficiaryMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.Beneficiary";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		TrustFundShare("TrustFundShare"),
		NRICNo_PassportNo_ID("NRICNo_PassportNo_ID"),
		RelationToSettlor("RelationToSettlor"),
		Nationality("Nationality"),
		ContactNo("ContactNo"),
		Address("Address"),
		Beneficiary_Applicant("MyFirstModule.Beneficiary_Applicant");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Beneficiary(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Beneficiary(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject beneficiaryMendixObject)
	{
		if (beneficiaryMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, beneficiaryMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.beneficiaryMendixObject = beneficiaryMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Beneficiary.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.Beneficiary initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.Beneficiary.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static myfirstmodule.proxies.Beneficiary initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Beneficiary(context, mendixObject);
	}

	public static myfirstmodule.proxies.Beneficiary load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Beneficiary.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Beneficiary> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> myfirstmodule.proxies.Beneficiary.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * Commit the changes made on this proxy object.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of Name
	 */
	public final java.lang.String getName()
	{
		return getName(getContext());
	}

	/**
	 * @param context
	 * @return value of Name
	 */
	public final java.lang.String getName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Name.toString());
	}

	/**
	 * Set value of Name
	 * @param name
	 */
	public final void setName(java.lang.String name)
	{
		setName(getContext(), name);
	}

	/**
	 * Set value of Name
	 * @param context
	 * @param name
	 */
	public final void setName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String name)
	{
		getMendixObject().setValue(context, MemberNames.Name.toString(), name);
	}

	/**
	 * @return value of TrustFundShare
	 */
	public final java.math.BigDecimal getTrustFundShare()
	{
		return getTrustFundShare(getContext());
	}

	/**
	 * @param context
	 * @return value of TrustFundShare
	 */
	public final java.math.BigDecimal getTrustFundShare(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.math.BigDecimal) getMendixObject().getValue(context, MemberNames.TrustFundShare.toString());
	}

	/**
	 * Set value of TrustFundShare
	 * @param trustfundshare
	 */
	public final void setTrustFundShare(java.math.BigDecimal trustfundshare)
	{
		setTrustFundShare(getContext(), trustfundshare);
	}

	/**
	 * Set value of TrustFundShare
	 * @param context
	 * @param trustfundshare
	 */
	public final void setTrustFundShare(com.mendix.systemwideinterfaces.core.IContext context, java.math.BigDecimal trustfundshare)
	{
		getMendixObject().setValue(context, MemberNames.TrustFundShare.toString(), trustfundshare);
	}

	/**
	 * @return value of NRICNo_PassportNo_ID
	 */
	public final java.lang.String getNRICNo_PassportNo_ID()
	{
		return getNRICNo_PassportNo_ID(getContext());
	}

	/**
	 * @param context
	 * @return value of NRICNo_PassportNo_ID
	 */
	public final java.lang.String getNRICNo_PassportNo_ID(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.NRICNo_PassportNo_ID.toString());
	}

	/**
	 * Set value of NRICNo_PassportNo_ID
	 * @param nricno_passportno_id
	 */
	public final void setNRICNo_PassportNo_ID(java.lang.String nricno_passportno_id)
	{
		setNRICNo_PassportNo_ID(getContext(), nricno_passportno_id);
	}

	/**
	 * Set value of NRICNo_PassportNo_ID
	 * @param context
	 * @param nricno_passportno_id
	 */
	public final void setNRICNo_PassportNo_ID(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String nricno_passportno_id)
	{
		getMendixObject().setValue(context, MemberNames.NRICNo_PassportNo_ID.toString(), nricno_passportno_id);
	}

	/**
	 * @return value of RelationToSettlor
	 */
	public final java.lang.String getRelationToSettlor()
	{
		return getRelationToSettlor(getContext());
	}

	/**
	 * @param context
	 * @return value of RelationToSettlor
	 */
	public final java.lang.String getRelationToSettlor(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.RelationToSettlor.toString());
	}

	/**
	 * Set value of RelationToSettlor
	 * @param relationtosettlor
	 */
	public final void setRelationToSettlor(java.lang.String relationtosettlor)
	{
		setRelationToSettlor(getContext(), relationtosettlor);
	}

	/**
	 * Set value of RelationToSettlor
	 * @param context
	 * @param relationtosettlor
	 */
	public final void setRelationToSettlor(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String relationtosettlor)
	{
		getMendixObject().setValue(context, MemberNames.RelationToSettlor.toString(), relationtosettlor);
	}

	/**
	 * Set value of Nationality
	 * @param nationality
	 */
	public final myfirstmodule.proxies.Enum_Citizen getNationality()
	{
		return getNationality(getContext());
	}

	/**
	 * @param context
	 * @return value of Nationality
	 */
	public final myfirstmodule.proxies.Enum_Citizen getNationality(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.Nationality.toString());
		if (obj == null) {
			return null;
		}
		return myfirstmodule.proxies.Enum_Citizen.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of Nationality
	 * @param nationality
	 */
	public final void setNationality(myfirstmodule.proxies.Enum_Citizen nationality)
	{
		setNationality(getContext(), nationality);
	}

	/**
	 * Set value of Nationality
	 * @param context
	 * @param nationality
	 */
	public final void setNationality(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.Enum_Citizen nationality)
	{
		if (nationality != null) {
			getMendixObject().setValue(context, MemberNames.Nationality.toString(), nationality.toString());
		} else {
			getMendixObject().setValue(context, MemberNames.Nationality.toString(), null);
		}
	}

	/**
	 * @return value of ContactNo
	 */
	public final java.lang.Integer getContactNo()
	{
		return getContactNo(getContext());
	}

	/**
	 * @param context
	 * @return value of ContactNo
	 */
	public final java.lang.Integer getContactNo(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.ContactNo.toString());
	}

	/**
	 * Set value of ContactNo
	 * @param contactno
	 */
	public final void setContactNo(java.lang.Integer contactno)
	{
		setContactNo(getContext(), contactno);
	}

	/**
	 * Set value of ContactNo
	 * @param context
	 * @param contactno
	 */
	public final void setContactNo(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer contactno)
	{
		getMendixObject().setValue(context, MemberNames.ContactNo.toString(), contactno);
	}

	/**
	 * @return value of Address
	 */
	public final java.lang.String getAddress()
	{
		return getAddress(getContext());
	}

	/**
	 * @param context
	 * @return value of Address
	 */
	public final java.lang.String getAddress(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Address.toString());
	}

	/**
	 * Set value of Address
	 * @param address
	 */
	public final void setAddress(java.lang.String address)
	{
		setAddress(getContext(), address);
	}

	/**
	 * Set value of Address
	 * @param context
	 * @param address
	 */
	public final void setAddress(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String address)
	{
		getMendixObject().setValue(context, MemberNames.Address.toString(), address);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Beneficiary_Applicant
	 */
	public final myfirstmodule.proxies.Applicant getBeneficiary_Applicant() throws com.mendix.core.CoreException
	{
		return getBeneficiary_Applicant(getContext());
	}

	/**
	 * @param context
	 * @return value of Beneficiary_Applicant
	 * @throws com.mendix.core.CoreException
	 */
	public final myfirstmodule.proxies.Applicant getBeneficiary_Applicant(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		myfirstmodule.proxies.Applicant result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Beneficiary_Applicant.toString());
		if (identifier != null) {
			result = myfirstmodule.proxies.Applicant.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Beneficiary_Applicant
	 * @param beneficiary_applicant
	 */
	public final void setBeneficiary_Applicant(myfirstmodule.proxies.Applicant beneficiary_applicant)
	{
		setBeneficiary_Applicant(getContext(), beneficiary_applicant);
	}

	/**
	 * Set value of Beneficiary_Applicant
	 * @param context
	 * @param beneficiary_applicant
	 */
	public final void setBeneficiary_Applicant(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.Applicant beneficiary_applicant)
	{
		if (beneficiary_applicant == null) {
			getMendixObject().setValue(context, MemberNames.Beneficiary_Applicant.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Beneficiary_Applicant.toString(), beneficiary_applicant.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return beneficiaryMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Beneficiary that = (myfirstmodule.proxies.Beneficiary) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
