// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies.constants;

import com.mendix.core.Core;

public class Constants
{
	/**
	 * @deprecated
	 * The default constructor of the Constants class should not be used.
	 * Use the static get methods instead.
	 */
	@java.lang.Deprecated(since = "9.12", forRemoval = true)
	public Constants() {}

	// These are the constants for the MyFirstModule module

	public static java.lang.String getDataSetIDReport2()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.DataSetIDReport2");
	}

	public static java.lang.String getDataSetSntcReport()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.DataSetSntcReport");
	}

	public static java.lang.String getEmbedURL()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.EmbedURL");
	}

	public static java.lang.String getGroupID()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.GroupID");
	}

	public static java.lang.String getReportID_Reprt2()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.ReportID_Reprt2");
	}

	public static java.lang.String getReportID_Sntc_Report()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("MyFirstModule.ReportID_Sntc_Report");
	}
}