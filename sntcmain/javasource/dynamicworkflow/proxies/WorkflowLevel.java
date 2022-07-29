// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package dynamicworkflow.proxies;

public class WorkflowLevel
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject workflowLevelMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "DynamicWorkflow.WorkflowLevel";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Name("Name"),
		Active("Active"),
		WorkflowLevel_DynamicWorkflow("DynamicWorkflow.WorkflowLevel_DynamicWorkflow"),
		WorkflowLevel_WorkflowLevel("DynamicWorkflow.WorkflowLevel_WorkflowLevel"),
		WorkflowLevel_Template("DynamicWorkflow.WorkflowLevel_Template"),
		WorkflowLevel_Applicant("DynamicWorkflow.WorkflowLevel_Applicant");

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

	public WorkflowLevel(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected WorkflowLevel(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject workflowLevelMendixObject)
	{
		if (workflowLevelMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, workflowLevelMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.workflowLevelMendixObject = workflowLevelMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'WorkflowLevel.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static dynamicworkflow.proxies.WorkflowLevel initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return dynamicworkflow.proxies.WorkflowLevel.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static dynamicworkflow.proxies.WorkflowLevel initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new dynamicworkflow.proxies.WorkflowLevel(context, mendixObject);
	}

	public static dynamicworkflow.proxies.WorkflowLevel load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return dynamicworkflow.proxies.WorkflowLevel.initialize(context, mendixObject);
	}

	public static java.util.List<dynamicworkflow.proxies.WorkflowLevel> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> dynamicworkflow.proxies.WorkflowLevel.initialize(context, obj))
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
	 * @return value of Active
	 */
	public final java.lang.Boolean getActive()
	{
		return getActive(getContext());
	}

	/**
	 * @param context
	 * @return value of Active
	 */
	public final java.lang.Boolean getActive(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.Active.toString());
	}

	/**
	 * Set value of Active
	 * @param active
	 */
	public final void setActive(java.lang.Boolean active)
	{
		setActive(getContext(), active);
	}

	/**
	 * Set value of Active
	 * @param context
	 * @param active
	 */
	public final void setActive(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean active)
	{
		getMendixObject().setValue(context, MemberNames.Active.toString(), active);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowLevel_DynamicWorkflow
	 */
	public final dynamicworkflow.proxies.DynamicWorkflow getWorkflowLevel_DynamicWorkflow() throws com.mendix.core.CoreException
	{
		return getWorkflowLevel_DynamicWorkflow(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowLevel_DynamicWorkflow
	 * @throws com.mendix.core.CoreException
	 */
	public final dynamicworkflow.proxies.DynamicWorkflow getWorkflowLevel_DynamicWorkflow(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		dynamicworkflow.proxies.DynamicWorkflow result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowLevel_DynamicWorkflow.toString());
		if (identifier != null) {
			result = dynamicworkflow.proxies.DynamicWorkflow.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowLevel_DynamicWorkflow
	 * @param workflowlevel_dynamicworkflow
	 */
	public final void setWorkflowLevel_DynamicWorkflow(dynamicworkflow.proxies.DynamicWorkflow workflowlevel_dynamicworkflow)
	{
		setWorkflowLevel_DynamicWorkflow(getContext(), workflowlevel_dynamicworkflow);
	}

	/**
	 * Set value of WorkflowLevel_DynamicWorkflow
	 * @param context
	 * @param workflowlevel_dynamicworkflow
	 */
	public final void setWorkflowLevel_DynamicWorkflow(com.mendix.systemwideinterfaces.core.IContext context, dynamicworkflow.proxies.DynamicWorkflow workflowlevel_dynamicworkflow)
	{
		if (workflowlevel_dynamicworkflow == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_DynamicWorkflow.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_DynamicWorkflow.toString(), workflowlevel_dynamicworkflow.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowLevel_WorkflowLevel
	 */
	public final dynamicworkflow.proxies.WorkflowLevel getWorkflowLevel_WorkflowLevel() throws com.mendix.core.CoreException
	{
		return getWorkflowLevel_WorkflowLevel(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowLevel_WorkflowLevel
	 * @throws com.mendix.core.CoreException
	 */
	public final dynamicworkflow.proxies.WorkflowLevel getWorkflowLevel_WorkflowLevel(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		dynamicworkflow.proxies.WorkflowLevel result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowLevel_WorkflowLevel.toString());
		if (identifier != null) {
			result = dynamicworkflow.proxies.WorkflowLevel.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowLevel_WorkflowLevel
	 * @param workflowlevel_workflowlevel
	 */
	public final void setWorkflowLevel_WorkflowLevel(dynamicworkflow.proxies.WorkflowLevel workflowlevel_workflowlevel)
	{
		setWorkflowLevel_WorkflowLevel(getContext(), workflowlevel_workflowlevel);
	}

	/**
	 * Set value of WorkflowLevel_WorkflowLevel
	 * @param context
	 * @param workflowlevel_workflowlevel
	 */
	public final void setWorkflowLevel_WorkflowLevel(com.mendix.systemwideinterfaces.core.IContext context, dynamicworkflow.proxies.WorkflowLevel workflowlevel_workflowlevel)
	{
		if (workflowlevel_workflowlevel == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_WorkflowLevel.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_WorkflowLevel.toString(), workflowlevel_workflowlevel.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowLevel_Template
	 */
	public final dynamicform.proxies.Template getWorkflowLevel_Template() throws com.mendix.core.CoreException
	{
		return getWorkflowLevel_Template(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowLevel_Template
	 * @throws com.mendix.core.CoreException
	 */
	public final dynamicform.proxies.Template getWorkflowLevel_Template(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		dynamicform.proxies.Template result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowLevel_Template.toString());
		if (identifier != null) {
			result = dynamicform.proxies.Template.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowLevel_Template
	 * @param workflowlevel_template
	 */
	public final void setWorkflowLevel_Template(dynamicform.proxies.Template workflowlevel_template)
	{
		setWorkflowLevel_Template(getContext(), workflowlevel_template);
	}

	/**
	 * Set value of WorkflowLevel_Template
	 * @param context
	 * @param workflowlevel_template
	 */
	public final void setWorkflowLevel_Template(com.mendix.systemwideinterfaces.core.IContext context, dynamicform.proxies.Template workflowlevel_template)
	{
		if (workflowlevel_template == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_Template.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_Template.toString(), workflowlevel_template.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowLevel_Applicant
	 */
	public final myfirstmodule.proxies.Applicant getWorkflowLevel_Applicant() throws com.mendix.core.CoreException
	{
		return getWorkflowLevel_Applicant(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowLevel_Applicant
	 * @throws com.mendix.core.CoreException
	 */
	public final myfirstmodule.proxies.Applicant getWorkflowLevel_Applicant(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		myfirstmodule.proxies.Applicant result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowLevel_Applicant.toString());
		if (identifier != null) {
			result = myfirstmodule.proxies.Applicant.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowLevel_Applicant
	 * @param workflowlevel_applicant
	 */
	public final void setWorkflowLevel_Applicant(myfirstmodule.proxies.Applicant workflowlevel_applicant)
	{
		setWorkflowLevel_Applicant(getContext(), workflowlevel_applicant);
	}

	/**
	 * Set value of WorkflowLevel_Applicant
	 * @param context
	 * @param workflowlevel_applicant
	 */
	public final void setWorkflowLevel_Applicant(com.mendix.systemwideinterfaces.core.IContext context, myfirstmodule.proxies.Applicant workflowlevel_applicant)
	{
		if (workflowlevel_applicant == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_Applicant.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowLevel_Applicant.toString(), workflowlevel_applicant.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return workflowLevelMendixObject;
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
			final dynamicworkflow.proxies.WorkflowLevel that = (dynamicworkflow.proxies.WorkflowLevel) obj;
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
