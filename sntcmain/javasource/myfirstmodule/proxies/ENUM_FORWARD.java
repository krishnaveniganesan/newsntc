// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public enum ENUM_FORWARD
{
	Forward_to_case_manager(new java.lang.String[][] { new java.lang.String[] { "en_US", "Forward to case manager" } }),
	Forward_to_senior_case_manager(new java.lang.String[][] { new java.lang.String[] { "en_US", "Forward to senior case manager" } }),
	Forward_to_trust_admin(new java.lang.String[][] { new java.lang.String[] { "en_US", "Forward to trust admin" } }),
	Forward_to_senior_manager(new java.lang.String[][] { new java.lang.String[] { "en_US", "Forward to senior manager" } }),
	Forward_to_general_manager(new java.lang.String[][] { new java.lang.String[] { "en_US", "Forward to general manager" } });

	private final java.util.Map<java.lang.String, java.lang.String> captions;

	private ENUM_FORWARD(java.lang.String[][] captionStrings)
	{
		this.captions = new java.util.HashMap<>();
		for (java.lang.String[] captionString : captionStrings) {
			captions.put(captionString[0], captionString[1]);
		}
	}

	public java.lang.String getCaption(java.lang.String languageCode)
	{
		return captions.getOrDefault(languageCode, "en_US");
	}

	public java.lang.String getCaption()
	{
		return captions.get("en_US");
	}
}